"""Check public HTML references without external dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.ids = set()
        self.references = []
        self.language = None
        self.feed(path.read_text(encoding="utf-8"))

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.language = attrs.get("lang")
        if "id" in attrs:
            assert attrs["id"] not in self.ids, f"Duplicate ID: {self.path}: {attrs['id']}"
            self.ids.add(attrs["id"])
        for key in ("href", "src"):
            if key in attrs:
                self.references.append(attrs[key])


pages = {path: Page(path) for path in ROOT.glob("*.html")}
for path, page in pages.items():
    assert page.language == "zh-Hant", f"Missing Traditional Chinese language: {path}"
    for reference in page.references:
        url = urlsplit(reference)
        assert "example.com" not in reference, f"Placeholder link: {reference}"
        if url.scheme or url.netloc:
            continue
        target = (path.parent / unquote(url.path)).resolve() if url.path else path
        assert target.is_relative_to(ROOT), f"Reference outside site: {reference}"
        assert target.is_file(), f"Missing file: {path}: {reference}"
        if url.fragment and target in pages:
            assert unquote(url.fragment) in pages[target].ids, f"Missing anchor: {reference}"
print(f"PASS: {len(pages)} public pages; local files, anchors, IDs, language, and email placeholders checked.")

#!/usr/bin/env python3
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = ROOT / "public" / "favicons" / "src"
OUT_BASE = ROOT / "public" / "favicons"

VARIANTS = ["main", "dog", "lab"]
PNG_SIZES = {
    "icon-512.png": 512,
    "apple-icon-180.png": 180,
    "icon-32.png": 32,
}
ICO_SIZES = [16, 32, 48]


def _resample() -> int:
    try:
        return Image.Resampling.LANCZOS
    except AttributeError:
        return Image.LANCZOS


def _load_source(path: Path) -> Image.Image:
    if not path.exists():
        raise SystemExit(f"Missing source: {path}")
    img = Image.open(path)
    return img.convert("RGBA")


def _write_png(img: Image.Image, size: int, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    resized = img.resize((size, size), _resample())
    resized.save(out_path, format="PNG")


def _write_ico(img: Image.Image, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    sizes = [(s, s) for s in ICO_SIZES]
    img.save(out_path, format="ICO", sizes=sizes)


def main() -> None:
    for variant in VARIANTS:
        src_path = SRC_DIR / f"{variant}.png"
        img = _load_source(src_path)
        out_dir = OUT_BASE / variant

        for filename, size in PNG_SIZES.items():
            _write_png(img, size, out_dir / filename)

        _write_ico(img, out_dir / "favicon.ico")

    print("Favicons generated.")


if __name__ == "__main__":
    main()

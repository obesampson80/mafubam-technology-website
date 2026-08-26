# Image Delivery Requirements

These requirements should guide the later website build.

## 1. Hero Image

Preferred source master:

`mafubam-website/assets/images/hero/hero-proof-workbench-v2@2x.png`

Dimensions:

3432 x 1832

Standard version:

`mafubam-website/assets/images/hero/hero-proof-workbench-v2.png`

Dimensions:

1716 x 916

## 2. Implementation Rule

Do not stretch a smaller hero image to fill very large screens.

During coding, use responsive image delivery:

- Use the 2x master to generate optimized sizes.
- Serve smaller derivatives to mobile devices.
- Serve larger derivatives to desktop/high-density screens.
- Use `srcset` or equivalent static-site responsive image markup.

## 3. Recommended Derivatives Later

Create these later during implementation or image optimization:

- 800px wide mobile image
- 1200px wide tablet/small desktop image
- 1716px standard desktop image
- 2400px or larger large-desktop image
- 3432px source/master kept for future exports

Preferred formats:

- AVIF if supported by the chosen build process
- WebP fallback
- JPEG or PNG fallback where needed

## 4. Quality Rule

The hero should look crisp on large screens but still load quickly on Nigerian mobile networks.

Use:

- Proper compression
- Width/height attributes
- Lazy loading for non-hero images
- Eager loading only for the first hero image if it is above the fold


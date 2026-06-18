# Frontline Echo

Practical Echocardiography Skills for Acute and Emergency Care Clinicians in North Wales.

- Date: Saturday 25 July 2026
- Venue: Medical Institute, Wrexham Maelor Hospital, North Wales
- Course fee: £295
- Places: Limited to 20 delegates
- Course Director: Dr Irfan Rind

## Files

- `index.html` - website homepage
- `assets/css/styles.css` - styling
- `assets/js/script.js` - mobile navigation
- `assets/images/` - original photographs used on the site
- `assets/programme/frontline-echo-programme-25-july-2026.pdf` - downloadable programme PDF with the date added
- `CNAME` - GitHub Pages custom domain set to `www.frontline-echo.uk`

## Important: registration form setup

This is a static GitHub Pages website. To receive form submissions, set up a free Formspree form and replace this line inside `index.html`:

```html
<form class="registration-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

with your Formspree endpoint, for example:

```html
<form class="registration-form" action="https://formspree.io/f/abcdwxyz" method="POST">
```

Alternative: replace the form with an embedded Google Form.

## How to publish on GitHub Pages

1. Create a GitHub repository called `frontline-echo`.
2. Upload all files from this folder to the repository root.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, select:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/root`
5. Save.
6. In **Custom domain**, use: `www.frontline-echo.uk`.
7. Tick **Enforce HTTPS** once GitHub allows it.

## Namecheap DNS settings

In Namecheap, go to **Domain List > Manage > Advanced DNS**.

Add:

| Type | Host | Value |
|---|---|---|
| CNAME Record | www | YOUR-GITHUB-USERNAME.github.io |
| URL Redirect Record | @ | https://www.frontline-echo.uk |

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

## Payment instructions shown on the site

Payment by bank transfer only:

- Account Name: Frontline Echo Ltd
- Account Number: 61023251
- Sort Code: 60-83-71
- Reference: Delegate full name

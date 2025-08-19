# Vacation Avocation

## Adding a new guide
1. Add an entry to `public/data/guides.json` with:
   - `title`, `excerpt`, `continent`, `country`, `city`, `url`, `themes`, `length`, `season`, `updated`, `latitude`, `longitude`, `image`.
2. Optionally drop a draft Markdown file in `guides-drafts/` for preview work.
3. Create a page at the `url` you specified under `src/app` if it does not already exist.

## Newsletter signup
Mailchimp form settings live in `src/components/NewsletterForm.tsx`. Paste your Mailchimp action URL and any hidden inputs into that component.

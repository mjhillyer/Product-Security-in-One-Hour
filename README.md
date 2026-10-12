<div align="center">

# Product Security in One Hour

**A free, self-guided introduction to medical device product security for everyone on the product team.**

[**Start the course**](https://mjhillyer.github.io/Product-Security-in-One-Hour/learn/start.html) ·
[**Reference guides**](https://mjhillyer.github.io/Product-Security-in-One-Hour/guides.html) ·
[**Download everything (ZIP)**](https://mjhillyer.github.io/Product-Security-in-One-Hour/guides/pdf/product-security-reference-pack.zip)

![Duration](https://img.shields.io/badge/duration-~60%20min-7E44A9)
![Modules](https://img.shields.io/badge/modules-6-197EC6)
![Guides](https://img.shields.io/badge/printable%20guides-7-1999B2)
![Sign-up](https://img.shields.io/badge/sign--up-none-9C3396)
![License](https://img.shields.io/badge/content-CC%20BY%204.0-233884)

</div>

---

## What this is

A practical, self-paced course on **medical device product cybersecurity** for product owners, program managers, engineers,
quality and regulatory, clinical, service, sales and supply chain colleagues. No security background is needed. In about an hour it
covers why security is a patient-safety issue, what Secure by Design means, what regulators around the world expect, the work that
happens before and after a device is released, and who does what.

Four **fictional** devices carry the examples: **CardiaPace** (an implantable pacemaker with a home transmitter and cloud portal),
**FlowGuard** (a hospital infusion pump fleet), **DermaLens** (an AI-assisted skin-triage app) and **OrionArm** (a surgical robot).

There are no quizzes, certificates, accounts or tracking. Each module ends with a hands-on **“Try it”** exercise and a worked example to
compare against. Progress (which modules you've marked complete) is kept only in the learner's own browser.

## The course

| Module | Time | Covers |
|---|---|---|
| 0 · Start here | 2 min | How the course works; meet the four devices |
| 1 · What is product security? | 10 min | Why devices differ from IT, safety and security, confidentiality/integrity/availability, “cyber devices”, the product security program |
| 2 · Secure by Design | 12 min | Building security in, core principles, threat modeling in brief, FDA's control categories, the SBOM, device trade-offs |
| 3 · Regulations &amp; standards | 12 min | FDA and Section 524B, the EU MDR, other major markets, IMDRF, key standards and frameworks (current as of October 2026) |
| 4 · Before and after release | 12 min | Premarket evidence, vulnerability handling and coordinated disclosure, controlled vs uncontrolled risk, patching, end of support |
| 5 · Your role | 8 min | Who does what, when to engage product security, how to report a suspected vulnerability |
| 6 · Next steps | 4 min | A 30-day plan, further reading, and where to go next |

## Reference guides and templates

Print-ready US Letter PDFs (also viewable as web pages), in [`guides/`](guides/):

1. Meet the Devices
2. Secure by Design Principles
3. Global Regulations &amp; Standards at a Glance
4. Product Security Across the Lifecycle
5. Roles &amp; When to Engage Product Security
6. Your First 30 Days
7. Glossary &amp; Further Reading

Editable templates in [`templates/`](templates/): a product security **engagement checklist** (`.docx`), a **program RACI** (`.xlsx`
with drop-downs and checks, plus `.csv`), and a **tabletop exercise kit** for a vulnerability-report scenario (`.docx`).

## Repository layout

```
index.html                 Landing page
learn/                     The seven course pages (start.html, 1-… to 6-…)
guides.html                Reference guide and template library
guides/*.html              Printable guides (source for the PDFs)
guides/guide.css           Print styles for the guides
guides/pdf/                Rendered PDFs and the complete reference pack (ZIP)
templates/                 Engagement checklist, program RACI and tabletop kit
assets/css/site.css        Site styles
assets/js/course.js        Module list, sidebar, progress (browser-only) and prev/next
assets/social-card.png     Link preview image (1200×630)
```

The site is plain HTML, CSS and a little JavaScript. There is no build step: edit the pages directly.

### Regenerating a PDF after editing a guide

Open the guide in Chrome and print to PDF (US Letter, margins **None**, headers and footers **off**), or from the command line:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer \
  --print-to-pdf=guides/pdf/regulatory-map.pdf "file://$PWD/guides/regulatory-map.html"
```

Each guide page is a fixed-size sheet, so check that new content still fits above the page footer. Then rebuild the ZIP:

```bash
cd guides/pdf && rm -f product-security-reference-pack.zip && \
  zip -j product-security-reference-pack.zip *.pdf ../../templates/* ../../LICENSE-DOCS
```

## Keeping it current

Regulations in this area change often. The regulatory content was checked in **October 2026**. If you spot a change, please open an
issue or pull request.

## Publishing (GitHub Pages)

1. Push the repository to GitHub.
2. **Settings → Pages → Build and deployment → Source: _Deploy from a branch_**, branch `main`, folder `/ (root)`.
3. The site appears at `https://<your-username>.github.io/<repository-name>/` within a minute or two.

If you fork under a different name, update the absolute URLs (canonical and `og:` tags, footer links, guide footers) by searching for
`mjhillyer.github.io/Product-Security-in-One-Hour`.

## In-depth training

This course covers the essentials. For more detailed, in-depth product security training for medical device teams (instructor-led
programs, regulatory depth, hands-on tabletops and threat modeling on your own products, and help building your program), contact
**Matt Hillyer LLC** at [matt@matthillyer.io](mailto:matt@matthillyer.io?subject=Product%20security%20training).

## License

- **Course content, reference guides and templates**: [CC BY 4.0](LICENSE-DOCS). Use and adapt them freely, with attribution.
- **Code (site styles and scripts)**: [MIT](LICENSE).

CardiaPace, FlowGuard, DermaLens and OrionArm are fictional; any resemblance to real products is coincidental. Real public events are
summarized from regulator and government advisories. This is educational material, not legal or regulatory advice.

## Citation

> Hillyer, M. (2026). *Product Security in One Hour: a free, self-guided course* (Version 1.0).
> https://mjhillyer.github.io/Product-Security-in-One-Hour/

## Related

- [Product Security Capability &amp; Maturity Framework](https://mjhillyer.github.io/Product-Security-Maturity-Assessment-Program/), which includes a browser-based [scorecard](https://mjhillyer.github.io/Product-Security-Maturity-Assessment-Program/scorecard.html)

---

<div align="center"><sub>Built and maintained by Matt Hillyer · Matt Hillyer LLC</sub></div>

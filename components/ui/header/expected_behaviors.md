# Header — expected behaviors (plan)

Use this as a checklist before implementing `header.tsx`.

1. **Semantics and accessibility** — Render a single top-level `<header>` with `role="banner"` where appropriate; nav links are focusable and keyboard-usable; visible focus styles match the design system (`focus-visible` patterns used elsewhere in `components/ui`).

2. **Content** — Brand or name links to `/`; primary navigation reflects real routes (prefer a small config array or props so links are not hard-coded in multiple places).

3. **Layout** — Responsive row: logo left, nav center or right; consistent horizontal padding with the rest of the site; safe area on small viewports.

4. **Mobile** — At narrow widths, collapse nav into a menu (e.g. sheet/dialog + button) or a simple disclosure pattern; avoid relying on hover-only affordances.

5. **Optional enhancements** — Sticky or blurred background on scroll; active link styling from current pathname; optional CTA or theme toggle if the product needs them.

6. **Integration** — Compose with existing primitives (`Button`, `DropdownMenu`, etc.) and `cn()` from `@/lib/utils` for class names.

7. The leftside of the header is a logo to button to back to the main page, the rightside of the header have the link to redirect to blog/ til(today i learn) and playground page

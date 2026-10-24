<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep commercial settings numeric and centralized in `src/config/curso.ts`; format currency at rendering time so every offer uses the same source.
- Use the shared OfferButton for enrollment actions and validate checkout with the URL parser before rendering a link; navigation actions remain section anchors.
- Keep curriculum and FAQ data in the landing data module, and keep commercial rules covered by adjacent Vitest tests.

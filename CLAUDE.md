# Instructions d'exécution — ScreenToTrip (repo: serieshotels)

## Contexte
Site set-jetting (lieux de tournage). Stack : Next.js 16 App Router, TS strict,
Tailwind v4, MDX. Hosting Vercel + ISR. Monétisation : STAY22 (pivot) + Viator/GYG/
DiscoverCars/Tiqets via le composant <AffiliateLink>.

> Note stack : la stack réelle est Next.js 16.2.x + React 19 (alignée sur les
> projets soeurs hotelswithpets / curatedbachelorette qui buildent sur cette
> machine), pas Next 15. Tailwind est en v4 (config CSS via `@theme`, pas de
> tailwind.config.js).

## Règles
- Données programmatiques : uniquement dans /data, typées (voir data/types.ts).
  Pour ajouter une œuvre : créer le Title + ses Location + rattacher la Destination,
  en suivant exactement le pattern existant.
- Contenu éditorial : MDX dans /content (enregistré dans content/guides.ts).
- JAMAIS d'image sous copyright (affiches, captures, logos). Lieux réels seulement.
  Le design v1 n'utilise aucune image — uniquement typographie + dégradés CSS.
- sceneContext / howToVisit : rédigés en propres mots, pas de copier-coller.
- Liens affiliés : toujours via <AffiliateLink> (rel sponsored nofollow + tracking).
- STAY22 : <Stay22Map>, aid via env (STAY22_AID), iframe lazy-loadée.
- Secrets/ids (STAY22_AID, TMDB_KEY, etc.) : env uniquement, jamais en dur.
- Avant push : pnpm build OK, pas de 404 interne, canonicals cohérents.

## Modèle de données (data/types.ts)
- `Destination` — un hub géographique (ville / région). Agrège les Locations.
- `Title` — une œuvre (film ou série). Possède des `locationSlugs`.
- `Location` — un lieu de tournage réel. Rattaché à 1 Title + 1 Destination.
Helpers de jointure dans `lib/data.ts`.

## Pages (App Router)
- `/` home · `/titles` + `/titles/[slug]` · `/destinations` + `/destinations/[slug]`
- `/locations/[slug]` · `/guides` + `/guides/[slug]` (MDX) · `/about` · `/affiliate-disclosure`
- ISR : pages dynamiques en `revalidate = 86400`, `dynamicParams = false`.

## Workflow
1. Modifier /data ou /content.
2. pnpm build localement.
3. git push -> Vercel rebuild les pages concernées via ISR.

## Commandes
- pnpm dev / pnpm build / pnpm lint / pnpm typecheck
- (pnpm est activé via corepack : `corepack prepare pnpm@9 --activate`)

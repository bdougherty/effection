import type { Operation } from "effection";
import type { JSXChild } from "revolution";

import { useAbsoluteUrl } from "../plugins/rebase.ts";
import { Header } from "../components/header.tsx";
import { Footer } from "../components/footer.tsx";


export interface Options {
  title: string;
}

export function* useAppHtml({
  title,
}: Options): Operation<({ children }: { children: JSXChild }) => JSX.Element> {
  let homeURL = yield* useAbsoluteUrl("/");
  let twitterImageURL = yield* useAbsoluteUrl(
    "/assets/images/meta-effection.png"
  );

  return ({ children }) => (
    <html lang="en-US" dir="ltr">
      <head>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <meta property="og:image" content="/assets/images/meta-effection.png" />
        <meta
          property="og:title"
          content="Introduction | Effection"
          data-rh="true"
        />
        <meta property="og:url" content={homeURL} />
        <meta
          property="og:description"
          content="Effection is a structured concurrency and effects framework for JavaScript."
        />
        <meta
          name="description"
          content="Effection is a structured concurrency and effects framework for JavaScript."
        />
        <meta name="twitter:image" content={twitterImageURL} />
        <link rel="icon" href="/assets/images/favicon-effection.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={homeURL} />
        <link rel="alternate" href={homeURL} hreflang="en" />
        <link rel="alternate" href={homeURL} hreflang="x-default" />
        <link
          href="/assets/prism-atom-one-dark.css"
          rel="preload"
          as="style"
          onload="this.rel='stylesheet'"
        />
        <link
          href="https://use.typekit.net/ugs0ewy.css"
          rel="preload"
          as="style"
          onload="this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="https://use.typekit.net/ugs0ewy.css" />
          <link rel="stylesheet" href="/assets/prism-atom-one-dark.css" />
        </noscript>
      </head>
      <body class="max-w-screen-2xl m-auto">
        <div class="flex flex-col h-full overflow-hidden">
          <Header />
          <main class="grow container min-h-0 mx-auto overflow-hidden h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

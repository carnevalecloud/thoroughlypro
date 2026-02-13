import { Helmet } from "react-helmet-async";
import defaultOgImage from "@assets/generated_images/clean_industrial_facility_interior.png";

interface PageHeadProps {
  title: string;
  description: string;
  /** Optional full title (e.g. for home page). Otherwise uses "{title} | Thoroughly Pro". */
  fullTitle?: string;
  /** Optional OG image path (e.g. from import). Falls back to default facility image. */
  image?: string;
}

const SITE_NAME = "Thoroughly Pro";

export function PageHead({ title, description, fullTitle, image }: PageHeadProps) {
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "https://thoroughlypro.com";
  const canonical = typeof window !== "undefined" ? window.location.href : baseUrl;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${baseUrl}${image}`
    : `${baseUrl}${defaultOgImage}`;
  const resolvedTitle = fullTitle ?? `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

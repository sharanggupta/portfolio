import { buildStructuredData, toScriptSafeJson } from "@/lib/seo/structured-data";

/** The structured data for search engines, as a script in the document head. */
export default function JsonLd() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toScriptSafeJson(buildStructuredData()) }} />;
}

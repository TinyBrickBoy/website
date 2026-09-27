import type { Imprint } from "@/lib/strapi";
import P from "./Placeholder";

export const imprintComplete = (i: Imprint) => Boolean(i.name && i.street && i.city);

// Anschrift aus Strapi, fehlende Felder als Platzhalter
export default function ImprintAddress({ imprint, country = true }: { imprint: Imprint; country?: boolean }) {
  return (
    <>
      {imprint.name || <P>[VOLLSTÄNDIGER NAME]</P>}
      <br />
      {imprint.street || <P>[STRASSE UND HAUSNUMMER]</P>}
      <br />
      {imprint.city || <P>[PLZ ORT]</P>}
      {country && (
        <>
          <br />
          {imprint.country || "Deutschland"}
        </>
      )}
    </>
  );
}

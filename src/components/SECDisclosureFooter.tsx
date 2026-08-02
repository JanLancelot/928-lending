import Link from "next/link";

export interface SECDisclosureFooterProps {
  companyName?: string;
  secRegNo?: string;
  caNo?: string;
  npcRegistrationNo?: string;
}

export function SECDisclosureFooter({
  companyName = "928 Credit Concept Lending Corp.",
  secRegNo = "CS202600928",
  caNo = "CA-2026-0928",
  npcRegistrationNo = "NPC-REG-2026-928",
}: SECDisclosureFooterProps) {
  return (
    <footer>
      <div>
        {/* SEC Statutory Mandatory Disclosure Banner */}
        <div>
          <strong>
            Mandatory Regulatory Disclosure (Republic Act No. 9474 & SEC MC No. 19):
          </strong>
          Please study the terms and conditions in the Disclosure Statement
          before proceeding with any loan transaction. 928 Lending strictly
          adheres to truth-in-lending disclosure standards set by the Securities
          and Exchange Commission (SEC) and Bangko Sentral ng Pilipinas (BSP).
        </div>

        <div>
          {/* Corporate Entity Details */}
          <div>
            <h4>{companyName}</h4>
            <p>
              Licensed Financing & Lending Institution regulated by the
              Securities and Exchange Commission of the Philippines.
            </p>
            <div>
              <p>
                <span>SEC Reg. No:</span> {secRegNo}
              </p>
              <p>
                <span>Certificate of Authority (CA) No:</span> {caNo}
              </p>
              <p>
                <span>NPC Reg. Seal:</span> {npcRegistrationNo}
              </p>
            </div>
          </div>

          {/* Quick Legal & Compliance Links */}
          <div>
            <h4>Legal & Compliance</h4>
            <ul>
              <li>
                <Link href="/privacy-policy">
                  Privacy Policy (Data Privacy Act RA 10173)
                </Link>
              </li>
              <li>
                <span>Terms & Conditions of Lending (Draft)</span>
              </li>
              <li>
                <span>Truth in Lending Disclosure Statement</span>
              </li>
              <li>
                <a
                  href="https://www.sec.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEC Verification Portal &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Data Protection & Contact Info */}
          <div>
            <h4>Data Protection Officer</h4>
            <p>
              For privacy concerns or exercising Data Subject rights under RA 10173:
            </p>
            <p>dpo@928lending.com</p>
            <p>
              &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

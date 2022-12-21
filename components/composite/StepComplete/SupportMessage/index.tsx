import { Trans } from "react-i18next"

import { Message } from "./styled"

interface Props {
  supportPhone?: string
  supportEmail?: string
}

export const SupportMessage: React.FC<Props> = ({
  supportPhone,
  supportEmail,
}) => {
  const setI18nKey = () => {
    if (supportPhone && supportEmail) {
      return "stepComplete.fullSupport"
    }
    if (!supportPhone && supportEmail) {
      return "stepComplete.supportEmail"
    }
    if (supportPhone && !supportEmail) {
      return "stepComplete.supportPhone"
    }
  }

  if (!supportPhone && !supportEmail) {
    return <></>
  }

  return (
    <Message>
      <Trans
        i18nKey={setI18nKey()}
        values={{ email: supportEmail, phone: supportPhone }}
        components={{
          WrapperStyle: (
            <strong className="text-black border-b border-gray-300 cursor-pointer" />
          ),
          WrapperEmail: (
            <a
              data-test-id="support-email-link"
              href={`mailto:${supportEmail}`}
            />
          ),
          WrapperPhone: (
            <a
              data-test-id="support-phone-link"
              href={`tel:${supportPhone && supportPhone.replace(/\s+/g, "")}`}
            />
          ),
        }}
      />
    </Message>
  )
}

import { FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTranslation } from '@/hooks/useTranslation'

const ContactInput = () => {
    const { t } = useTranslation();
  return (
    <div className="bg-[#E8F1F9] rounded-xl p-6 md:p-10 w-full lg:w-[64%]" data-aos="zoom-in" suppressHydrationWarning>
          <h1 className="text-2xl font-bold mb-6" data-aos="zoom-in" data-aos-delay="150" suppressHydrationWarning>
            {t("contact.formTitle")}
          </h1>
          <div className="flex items-center justify-between">
            {/* Input form */}
            <form className=" flex flex-col gap-4 w-full">
              <div data-aos="zoom-in" data-aos-delay="200" className="w-full" suppressHydrationWarning>
                <FieldLabel htmlFor="fish" className="text-base">{t("contact.fio")}</FieldLabel>
                <Input
                  id="fish"
                  type="text"
                  placeholder={t("contact.placeholder")}
                  className="md:text-[16px] h-[50px] text-base bg-white border-none mt-1 w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4" data-aos="zoom-in" data-aos-delay="250" suppressHydrationWarning>
                <div className="w-full">
                  <FieldLabel htmlFor="phone" className="text-base">{t("contact.phone")}</FieldLabel>
                  <Input
                    id="phone"
                    type="number"
                    placeholder={t("contact.placeholder")}
                    className="md:text-[16px] h-[50px] text-base bg-white border-none mt-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <FieldLabel htmlFor="email" className="text-base">{t("contact.email")}</FieldLabel>
                  <Input
                    id="email"
                    type="text"
                    placeholder={t("contact.placeholder")}
                    className="md:text-[16px] h-[50px] text-base bg-white border-none mt-2 w-full"
                  />
                </div>
              </div>
              <div className="w-full" data-aos="zoom-in" data-aos-delay="300" suppressHydrationWarning>
                <FieldLabel htmlFor="comment" className="text-base">{t("contact.message")}</FieldLabel>
                <Textarea id="comment" name="comment" placeholder={t("contact.placeholder")} className="md:text-[16px] h-[100px] text-base bg-white border-none mt-2 w-full" />
              </div>
              <div data-aos="zoom-in" data-aos-delay="300" suppressHydrationWarning>
                <button
                  type="submit"
                  className="mt-2 bg-[#3291D3] hover:bg-[#2578b5] transition-colors text-white font-semibold px-8 py-3 rounded-xl cursor-pointer"
                >
                  {t("contact.send")}
                </button>
              </div>
            </form>
          </div>

        </div>
  )
}

export default ContactInput
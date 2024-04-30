import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'jp'],
    ns: ['translations'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
        en: {
            translations: {
                button: {
                    continue: 'Continue',
                    back: 'Back',
                    startReturn: 'Start 2023 Return',
                    edit: 'Edit'
                },
                landingPage: {
                    freeReturns: 'Free Federal Return for Everyone',
                    fileDirectly: 'E-File directly to the IRS'
                },
                stepIndicator: {
                    personalInformation: 'Personal Information',
                    financialInformation: 'Financial Information',
                    reviewAndSubmit: 'Review and Submit',
                    results: 'Results'
                },
                personalInformationForm: {
                    firstName: 'First Name',
                    lastName: 'Last Name',
                    streetAddress: 'Street Address',
                    city: 'City',
                    state: 'State',
                    zip: 'Zip Code',
                    birthDate: 'Birth Date',
                    ssn: 'Social Security Number'
                },
                financialInformationForm: {
                    incomeW2: 'W2 Income',
                    withholdingsW2: 'W2 Withholdings',
                    income1099: '1099 Income',
                    deductions: '1099 Deductions',
                    isMarried: 'Are you single or married?',
                    single: 'Single',
                    married: 'Married',
                    isStandardDeduction: 'Standard or Itemized Deduction?',
                    standard: 'Standard',
                    itemized: 'Itemized'
                },
                review: {
                    reviewInformation: 'Review your information',
                    personalInformation: 'Personal Information',
                    financialInformation: 'Financial Information',
                    maritalStatus: 'Marital Status',
                    deductionType: 'Deduction Type'
                },
                results: {
                    congratulations: 'Congratulations on filing your federal tax return!',
                    taxableIncome: 'Total Taxable Income:',
                    taxesOwed: 'Total Taxes Owed:',
                    withholdings: 'Total Withholdings:',
                    federalRefund: 'Your Federal Refund:'
                },
                header: {
                    languages: 'Languages'
                },
                footer: {
                    links: 'License Agreement | Privacy | Manage cookies | Security | Cobrowse | Give feedback'
                }
            }
        },
        es: {
            translations: {
                button: {
                    continue: 'Continuar',
                    back: 'Atrás',
                    startReturn: 'Inicio 2023 Regreso',
                    edit: 'Editar'
                },
                landingPage: {
                    freeReturns: 'Devolución federal gratuita para todas',
                    fileDirectly: 'Presentar electrónicamente directamente al IRS'
                },
                stepIndicator: {
                    personalInformation: 'Informacion Personal',
                    financialInformation: 'Información Financiera',
                    reviewAndSubmit: 'Revisar y Enviar',
                    results: 'Resultados'
                },
                personalInformationForm: {
                    firstName: 'Nombre De Pila',
                    lastName: 'Apellido',
                    streetAddress: 'Dirección',
                    city: 'Ciudad',
                    state: 'Estado',
                    zip: 'Código Postal',
                    birthDate: 'Fecha de Nacimiento',
                    ssn: 'Número de Seguro Social'
                },
                financialInformationForm: {
                    incomeW2: 'Ingresos W2',
                    withholdingsW2: 'Retenciones W2',
                    income1099: '1099 Ingresos',
                    deductions: '1099 Deducciones',
                    isMarried: '¿Eres soltero o casado?',
                    single: 'Soltera',
                    married: 'Casada',
                    isStandardDeduction: '¿Deducción estándar o detallada?',
                    standard: 'Estándar',
                    itemized: 'Detallada'
                },
                review: {
                    reviewInformation: 'Revisa tu información',
                    personalInformation: 'Informacion Personal',
                    financialInformation: 'Información Financiera',
                    maritalStatus: 'Estado Civil',
                    deductionType: 'Tipo de Deducción'
                },
                results: {
                    congratulations: '¡Felicitaciones por presentar su declaración de impuestos federales!',
                    taxableIncome: 'Ingreso Total Imponible:',
                    taxesOwed: 'Impuestos Totales Adeudados:',
                    withholdings: 'Retenciones Totales:',
                    federalRefund: 'Su Reembolso Federal:'
                },
                header: {
                    languages: 'Idiomas'
                },
                footer: {
                    links: 'Acuerdo de licencia | Privacidad | Gestionar Cookies | Seguridad | Explorar | Dar Opinion'
                }
            }
        },
        jp: {
            translations: {
                button: {
                    continue: '続く',
                    back: '戻る',
                    startReturn: '2023 年スタート リターン',
                    edit: '編集'
                },
                landingPage: {
                    freeReturns: '誰でも無料の連邦返品',
                    fileDirectly: '電子ファイルを IRS に直接送信する'
                },
                stepIndicator: {
                    personalInformation: '個人情報',
                    financialInformation: '財務情報',
                    reviewAndSubmit: '確認して送信する',
                    results: '結果'
                },
                personalInformationForm: {
                    firstName: '名',
                    lastName: '苗字',
                    streetAddress: '住所',
                    city: '市',
                    state: '州',
                    zip: '郵便番号',
                    birthDate: '生年月日',
                    ssn: '社会保障番号'
                },
                financialInformationForm: {
                    incomeW2: 'W2収入',
                    withholdingsW2: 'W2 源泉徴収',
                    income1099: '1099 収入',
                    deductions: '1099 控除',
                    isMarried: '独身ですか、それとも結婚​​していますか？',
                    single: '独身',
                    married: '結婚している',
                    isStandardDeduction: '標準控除または項目別控除?',
                    standard: '標準',
                    itemized: '項目別'
                },
                review: {
                    reviewInformation: '情報を確認する',
                    personalInformation: '個人情報',
                    financialInformation: '財務情報',
                    maritalStatus: '配偶者の有無',
                    deductionType: '控除タイプ'
                },
                results: {
                    congratulations: '連邦税申告書の提出おめでとうございます!',
                    taxableIncome: '課税対象所得の合計:',
                    taxesOwed: '未払いの税金の合計:',
                    withholdings: '源泉徴収総額:',
                    federalRefund: '連邦政府による払い戻し:'
                },
                header: {
                    languages: '言語'
                },
                footer: {
                    links: 'ライセンス契約 |プライバシー | クッキーを管理する |セキュリティ |コブラウズ |フィードバックを与えます'
                }
            }
        }
    }
  });

export default i18n;

import { faker } from "@faker-js/faker/locale/nl_BE";

// Fixed seed: the demo shows the same data on every run and during the video recording.
faker.seed(2026);

export type Transaction = {
  id: string;
  date: string;
  counterparty: string;
  category: string;
  amount: number;
  iban: string;
};

const CATEGORIES = [
  "Boodschappen",
  "Huur",
  "Transport",
  "Restaurant",
  "Abonnementen",
  "Kleding",
  "Gezondheid",
  "Loon",
] as const;

export function transactions(count = 50): Transaction[] {
  return Array.from({ length: count }, () => {
    const category = faker.helpers.arrayElement(CATEGORIES);
    const amount =
      category === "Loon"
        ? faker.number.float({ min: 2200, max: 3400, fractionDigits: 2 })
        : -faker.number.float({ min: 3, max: category === "Huur" ? 1100 : 180, fractionDigits: 2 });
    return {
      id: faker.string.uuid(),
      date: faker.date.recent({ days: 60 }).toISOString().slice(0, 10),
      counterparty: faker.company.name(),
      category,
      amount,
      iban: faker.finance.iban({ countryCode: "BE", formatted: true }),
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export type Employee = {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  startDate: string;
  grossMonthly: number;
  sickDaysThisYear: number;
  vacationDaysLeft: number;
};

const DEPARTMENTS = ["HR", "Finance", "IT", "Sales", "Operations", "Marketing"] as const;

export function employees(count = 30): Employee[] {
  return Array.from({ length: count }, () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
      id: faker.string.alphanumeric({ length: 6, casing: "upper" }),
      name: `${firstName} ${lastName}`,
      email: faker.internet.email({ firstName, lastName, provider: "bedrijf.be" }).toLowerCase(),
      department: faker.helpers.arrayElement(DEPARTMENTS),
      role: faker.person.jobTitle(),
      startDate: faker.date.past({ years: 10 }).toISOString().slice(0, 10),
      grossMonthly: faker.number.int({ min: 2600, max: 6500 }),
      sickDaysThisYear: faker.number.int({ min: 0, max: 18 }),
      vacationDaysLeft: faker.number.int({ min: 0, max: 20 }),
    };
  });
}

// Deliberately simplified Belgian payslip approximation, only for demos.
export function payslip(grossMonthly: number) {
  const rsz = +(grossMonthly * 0.1307).toFixed(2);
  const taxable = grossMonthly - rsz;
  const withholdingTax = +(taxable * 0.27).toFixed(2);
  const net = +(taxable - withholdingTax).toFixed(2);
  return { gross: grossMonthly, rsz, taxable, withholdingTax, net };
}

export default function classNames(...classes: Array<string | boolean>): string {
  return classes.filter(Boolean).join(" ");
}

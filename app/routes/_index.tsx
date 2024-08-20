import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Baseline" },
    { name: "description", content: "Welcome to Baseline!" },
  ];
};

export default function Index() {
  return (
    <div className="p-11">
      <p className="logo text-9xl text-skin-base">
        <span className="underline">Base</span>Line
      </p>
      <h1 className="font-black text-skin-base">Primary theme</h1>
    </div>
  );
}

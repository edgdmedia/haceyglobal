import React from "react";

export function TrustStrip() {
  const partners = ["Access", "Dangote Foundation", "GBCHealth", "Huawei", "Zenith", "UNICEF"];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-9">
      <div className="reveal text-center font-display font-bold text-xs tracking-wider uppercase text-gray-500 mb-[22px]">
        Trusted by leading partners &amp; funders
      </div>
      <div className="reveal d1 flex flex-wrap justify-center items-center gap-x-11 gap-y-5">
        {partners.map((p) => (
          <span
            key={p}
            className="font-display font-bold text-[19px] text-gray-500 tracking-tight opacity-85"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
export default TrustStrip;

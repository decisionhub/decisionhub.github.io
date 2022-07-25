import React, { useEffect } from "react";

export const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: "21553264",
          formId: "fd7d0c4d-0024-49b5-9877-19969a40822a",
          target: "#hubspotForm"
        });
      }
    });
  }, []);

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h2 style={{ marginTop: 20 }}>Reach out to us!</h2>
      <div id="hubspotForm"></div>
    </div>
  );
};

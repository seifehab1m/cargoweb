import React from "react";
import ReactMarkdown from "react-markdown";

export default function ViewTermsAndConditionsContent() {
  const content = `
### Terms and Conditions

1. **Introduction**  
   Welcome to Cargoweb. These Terms and Conditions govern your use of our services.

2. **User Responsibilities**  
   - Users must provide accurate information.  
   - Users are responsible for maintaining the confidentiality of their account details.

3. **Service Terms**  
   - Shipments with customs brokerage.  
   - Shipments containing hazardous goods.  
   - Shipments with insurance.

4. **Termination**  
   We reserve the right to terminate or suspend access to our services at any time.

5. **Contact Us**  
   For any questions, please contact us at support@cargoweb.com.
`;

  return (
    <div>
      <h6 className="text-sm text-darkGray pb-2">
        Terms and Conditions Content
      </h6>
      <div className="bg-white p-4 pb-20 rounded-lg">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

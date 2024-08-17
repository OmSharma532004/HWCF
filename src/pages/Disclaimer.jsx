import React from "react";
import Footer from "../components/HomePage/Footer";

const DisclaimerPolicy = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-8 text-gray-800">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 border-b-4 border-gray-200 pb-4">
          Disclaimer Policy
        </h1>

        <div className="mb-10">
          <p className="text-lg mb-4">
            The Forum materials may contain information, references to, or content supplied by third parties on its
            websites and at its events. Information contained on the website or in any written materials or content
            referring to any specific third party (including vendors, members, or other third parties) or its
            product(s), service(s), process(es), or procedure(s), by trade name, trademark, service or product provider
            name or otherwise, does not constitute or imply the endorsement, recommendation, or favoring of any of its
            affiliated organizations or their respective officers, directors, employees, agents, volunteers, or
            contractors of the referenced third-party content, person(s), product(s), service(s), or process(es).
          </p>

          <p className="text-lg mb-4">
            It is your responsibility to verify and investigate products, providers, and services. Please consult your
            own professional advisor for all advice concerning medical, legal, or financial matters in connection with
            the services needed.
          </p>

          <p className="text-lg mb-4">
            The Forum, its officers, directors, volunteers, or contractors specifically disclaim any liability or
            responsibility of any kind for the third-party content or any information transmitted to or received by any
            person in connection with the person’s use of the website(s) and at events.
          </p>

          <p className="text-lg mb-4">
            All information provided by the Forum on the website or at events is provided for informational purposes
            only and does not constitute a legal contract or other covenant or agreement of any kind between the Forum
            or an affiliated organization and any person or entity unless otherwise expressly specified.
          </p>

          <p className="text-lg mb-4">
            No warranty, expressed or implied, is made regarding the accuracy, adequacy, completeness, legality,
            reliability, or usefulness of any information, either isolated or in the aggregate. All information is
            provided “as is.” All warranties of any kind, express or implied, including but not limited to implied
            warranties of merchantability, fitness for a particular purpose, freedom from contamination by computer
            viruses, and non-infringement of proprietary rights, are disclaimed. Changes may be periodically made to the
            information; no notice is required with respect to any changes; and changes may or may not be incorporated
            into the website(s) or Forum-generated content or materials.
          </p>

          <p className="text-lg mb-4">
            If you find any errors or omissions, we encourage you to report them by e-mail to the Forum.
          </p>

          <p className="text-lg mb-4">
            The Forum, its officers, directors, volunteers, or contractors (i) are not liable for any improper or
            incorrect use of the information on the website(s) or other (ii) assume no responsibility for anyone’s use
            of or reliance on any such information or content (iii) are not liable for any damages (of any type, for any
            reason, however caused, or under any theory of liability) arising in any way out of the use of the
            website(s) or other developed content which may reference a third party’s products or services, even if
            advised of the possibility of that damage.
          </p>

          <p className="text-lg mb-4">
            The Forum’s core purpose is in advancing understanding of health and well-being coaching and promoting an
            exploration of the science and evidence to improve outcomes for health professionals, coaches, and patients.
            In doing so, we make no recommendations on the application of any specific approach, treatment, or products.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisclaimerPolicy;

import React from "react";
import Footer from "../components/HomePage/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-8 text-gray-800">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 border-b-4 border-gray-200 pb-4">
          Privacy Policy
        </h1>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Site Manager</h2>
          <p className="mb-1 text-lg">
            <strong>Name:</strong> Om Sharma
          </p>
          <p className="mb-1 text-lg">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@healthandwellbeingcoachingforum.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              info@healthandwellbeingcoachingforum.com
            </a>
          </p>
          <p className="mb-1 text-lg">
            <strong>Address:</strong> Drakesbrook House, Tring, Hertfordshire HP23 4QQ
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Content Editor</h2>
          <p className="text-lg">Om Sharma</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Hosting</h2>
          <p className="text-lg">Om Sharma</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Data Collection</h2>
          <p className="text-lg">
            The information collected on the forms of this site is recorded in a file by Om Sharma. The data is kept
            and archived in accordance with the regulations for the profession of coaching and psychology in the UK.
            Under no circumstances will the Health and Wellbeing Coaching Forum disclose the personal data of a user
            to a partner.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">User Rights</h2>
          <p className="text-lg">
            In accordance with the “Data Protection Act of 1978”, users of the{" "}
            <a
              href="https://healthandwellbeingcoachingforum.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              https://healthandwellbeingcoachingforum.com
            </a>{" "}
            site have a right of access to data concerning them which they can exercise by contacting{" "}
            <a
              href="mailto:info@healthandwellbeingcoachingforum.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              info@healthandwellbeingcoachingforum.com
            </a>
            .
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Cookies</h2>
          <p className="text-lg">The website does not set cookies.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Contact Information</h2>
          <p className="text-lg">
            To contact the editorial team, please email{" "}
            <a
              href="mailto:info@healthandwellbeingcoachingforum.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              info@healthandwellbeingcoachingforum.com
            </a>
            .
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Personal Data</h2>
          <p className="text-lg">
            You have the right to access, rectify, modify, and delete data concerning you collected on the Health and
            Wellbeing Coaching Forum site. To exercise this right, please contact:{" "}
            <a
              href="mailto:info@healthandwellbeingcoachingforum.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              info@healthandwellbeingcoachingforum.com
            </a>{" "}
            indicating your name, first name, and email address, as well as the case in which your data was used.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Data Usage</h2>
          <p className="text-lg">Personal data collected for the following purposes:</p>
          <ul className="list-disc list-inside ml-6 text-lg mb-4">
            <li>Registration for events</li>
            <li>Contact form</li>
            <li>Mailing list to share details of events</li>
            <li>Managing contacts and sending messages</li>
            <li>Paid events</li>
          </ul>
          <p className="text-lg">
            The data transmitted to the Forum are kept indefinitely. Information (texts, photos, and videos) related
            to operations carried out by the Health and Wellbeing Coaching Forum may be kept indefinitely unless
            expressly notified by you.
          </p>
          <p className="text-lg">
            You can choose to have the data and/or photos or videos of your choice deleted by a simple written request
            to the webmaster.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

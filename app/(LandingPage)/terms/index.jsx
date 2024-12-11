const Terms = () => {
  return (
    <div className="max-w-[90%] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Dev's Resume. By accessing or using our services, you
            agree to comply with and be bound by these Terms and Conditions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">2. User Eligibility</h2>
          <p>To use our services, you must be at least 18 years old.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">3. Account Registration</h2>
          <p>
            Users must connect their Google or LinkedIn account to sign in.
            Required information includes personal details (name, email,
            address), skills, experience, education, and potentially a LinkedIn
            connection or resume upload.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">4. Service Usage</h2>
          <p>Users should:</p>
          <ul className="list-disc list-inside">
            <li>Provide accurate information.</li>
            <li>Follow the outlined steps for using our services.</li>
            <li>
              Adhere to the provided instructions for building resumes, cover
              letters, and interview templates.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">5. Payment and Refunds</h2>
          <p>Payments are available as:</p>
          <ul className="list-disc list-inside">
            <li>One-time payment for a month access: $19.</li>
            <li>Monthly subscription: $9.99 per month.</li>
            <li>Six-month access: $49.99.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">6. User Responsibilities</h2>
          <p>Users must:</p>
          <ul className="list-disc list-inside">
            <li>Provide truthful information.</li>
            <li>Respect the platform's rules.</li>
            <li>Use the services for personal, non-commercial purposes.</li>
            <li>Review and correct AI-generated content before download.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">7. Prohibited Activities</h2>
          <p>The following activities are prohibited:</p>
          <ul className="list-disc list-inside">
            <li>Fraudulent activities.</li>
            <li>Misuse of the platform.</li>
            <li>Sharing inappropriate content.</li>
            <li>Any illegal actions.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">8. Termination</h2>
          <p>Accounts can be terminated or suspended for:</p>
          <ul className="list-disc list-inside">
            <li>Violating these terms.</li>
            <li>Providing false information.</li>
            <li>Engaging in prohibited activities.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">9. Intellectual Property</h2>
          <p>
            Dev's Resume owns the content and intellectual property on the
            platform, including the generated resumes, cover letters, and
            templates.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">10. Dispute Resolution</h2>
          <p>
            Any disputes arising from these terms or the use of our services
            will be resolved through arbitration in accordance with the laws of
            Maryland, USA.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">11. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of Maryland,
            USA.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;

const Privacy = () => {
  return (
    <div className="max-w-[90%] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Dev's Resume is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, share, and protect your
            personal information.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">2. Data Collection</h2>
          <p>We collect:</p>
          <ul className="list-disc list-inside">
            <li>Personal information (name, email, address).</li>
            <li>Skills, experience, education details.</li>
            <li>LinkedIn data (if connected).</li>
            <li>Resume details.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">3. Data Usage</h2>
          <p>We use the collected data to:</p>
          <ul className="list-disc list-inside">
            <li>Generate resumes, cover letters, and interview templates.</li>
            <li>Improve our services.</li>
            <li>Communicate with users.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">4. Data Sharing</h2>
          <p>
            We may share your data with third-party services for data processing
            and optimization. Some data may be shared with OpenAI's ChatGPT for
            service enhancement.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">5. Cookies and Tracking</h2>
          <p>We use cookies and tracking technologies to:</p>
          <ul className="list-disc list-inside">
            <li>Improve user experience.</li>
            <li>Track user preferences.</li>
            <li>Conduct website analytics.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">6. User Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside">
            <li>Access your personal data.</li>
            <li>Correct any inaccuracies in your data.</li>
            <li>Request deletion of your data.</li>
            <li>Withdraw consent for data usage.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">7. Data Security</h2>
          <p>We implement:</p>
          <ul className="list-disc list-inside">
            <li>Encryption.</li>
            <li>Secure servers.</li>
            <li>Access controls to protect your data.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            8. International Data Transfers
          </h2>
          <p>
            If your data is transferred internationally, we ensure it is handled
            securely and in compliance with applicable data protection laws.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">9. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you
            of any changes by posting the new policy on our website.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">10. Contact Us</h2>
          <p>
            For any questions or concerns regarding this Privacy Policy, please
            contact us at Admin@devsresume.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;

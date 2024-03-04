import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import legalPages from "../../data/legal";

const Terms = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-8">Cancellation and Refund</h1>
      <p className="py-2 text-lg">
        - Karma 2024 is an annual national level techno-cultural fest conducted
        in KMCT College of Engineering. These Terms and Conditions govern your
        participation in the college program Karma offered by KMCT College of
        Engineering. By enrolling in or participating in the Program, you agree
        to abide by these Terms. Please read them carefully.
      </p>
      <h2 className="pl-8 text-2xl my-4">● Eligibility:</h2>
      <p className="pl-16">
        ○ The Program is open to all college students and majors. Participants
        must meet all eligibility requirements set forth by the college.
      </p>
      <h2 className="pl-8 text-2xl my-4">● Duration:</h2>
      <p className="pl-16">
        ○ The Program duration of any events that are a part of Karma shall be
        as specified by the college authorities.The college reserves the right
        to modify or terminate the program at any time without prior notice.
      </p>
      <h2 className="pl-8 text-2xl my-4">● Participation:</h2>
      <p className="pl-16">
        ○ Participants must complete the enrollment process as specified by the
        college Enrollment may require submission of necessary documentation or
        completion of specific requirements. <br />○ Participants must actively
        engage in all aspects of the Program as outlined by the college.
        Participants are expected to adhere to all academic and behavioral
        standards set forth by the college.
      </p>
      <h2 className="pl-8 text-2xl my-4">● Fees and Expenses:</h2>
      <p className="pl-16">
        ○ The college may charge fees associated with participation for the
        events of the Program. Participants are responsible for payment of any
        applicable fees. Participants are responsible for any additional
        expenses related to the Program, including but not limited to materials,
        textbooks, travel, and accommodation.
      </p>
      <h2 className="pl-8 text-2xl my-4">● Code of Conduct:</h2>
      <p className="pl-16">
        ○ Participants must adhere to the college's code of conduct and policies
        at all times. Any violation of the code of conduct may result in
        disciplinary action, up to and including immediate expulsion from the
        Program. This applies for all events, including competitions to cultural
        programs.
      </p>
      <h2 className="pl-8 text-2xl my-4">● Intellectual Property:</h2>
      <p className="pl-16">
        ○ Participants retain ownership of any intellectual property created
        during the Program. Participants are not allowed to engage in any kind
        of intellectual property theft in any events of Karma, violation of
        which could lead to consequences from expulsion from the program and
        legal action.
      </p>
      <h2 className="pl-8 text-2xl my-4">● Disclaimer:</h2>
      <p className="pl-16">
        ○ The college makes no warranties or representations regarding the
        Program, and participation is at the participant's own risk. The college
        will not be responsible for any errors or misinterpretations on your
        part.
      </p>
      <p className="py-2 text-lg leading-relaxed pt-4">
        - By enrolling in or participating in Karma 2024, you acknowledge that
        you have read, understood, and agree to be bound by these Terms and any
        additional terms and conditions provided by KMCT College of Engineering.
      </p>
    </div>
  );
};

export default Terms;

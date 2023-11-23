import Faq from "react-faq-component";

function FrequentlyAskedQuestions() {
  const data = {
    rows: [
      {
        title: "Who is it for?",
        content: `Anyone who has an interest and passion to learn music.`,
      },
      {
        title: "How will it benefit the student?",
        content:
          "In addition to learning Carnatic vocal music,students will also learn Carnatic music theory. Music instils peace. So, music is its own reward. Students will get an opportunity to perform either a solo or a group musical during the performance day (Pradarshana). This will boost their self-confidence. We will work closely with the students to develop their creativity. Sessions will include creative parts in which students will be encouraged to be creative. We will provide vocal training on a regular basis. Simple breathing techniques and advise on food habits that will help their vocal cords will also be discussed in lessons.",
      },
      {
        title: "Is it a Faith School?",
        content: `Carnatic music has devotion (Love for God) as the under-current in every piece. Most of the works in the field of music were inspired by spirituality and love for God. So, the music taught will include names of God from Hinduism but the Academy is open to people from any faith.`,
      },
      {
        title: "How do I choose my level?",
        content: `Teachers will assess the student before enrolling in to a level. We understand that some students might have previous experience in Carnatic music, and some might be at an
  
        advanced level. Therefore, students should discuss this with the teachers who will assess them and assign them to a level based on the audition results`,
      },
      {
        title: "Will there be examinations?",
        content: `Students will have assessments at the end of each year. If they are in the middle of a level, they will be tested only till what they’ve learnt. An exam report will be sent home during the summer holidays. Once a level is completed, they will be awarded a level completion certificate during Pradarshana. These assessments will decide if they are ready to progress to the next level. These assessments will be run by Raaga Sudha Music Academy.`,
      },
      {
        title: "Will the students be eligible for accredited examinations?",
        content: `The Raaga Sudha Music Academy curriculum will cover the requirements to undertake exams organised by Trinity School of London or any other accredited body. If you are planning for your child to take the test from any such school, please let us know 2 months in advance so that we can train them accordingly.`,
      },
      {
        title: "Can students record their classes?",
        content: `Students are advised not to record classes using their own devices. If they require the recording of any particular lesson please get in touch with the guru.`,
      },
      {
        title: "How are the classes conducted?",
        content: `The classes will be conducted in groups. Gurus will make sure that each student is given
  
        individual attention and support for them to achieve their milestones.`,
      },
    ],
  };

  const styles = {
    bgColor: "transparent",
    rowTitleTextSize: "25px",
    rowContentTextSize: "25px",
    rowContentPaddingTop: "30px",
    rowContentPaddingBottom: "30px",
  };

  const config = {
    animate: true,
    arrowIcon: "↓",
    tabFocus: true,
  };
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

export default FrequentlyAskedQuestions;

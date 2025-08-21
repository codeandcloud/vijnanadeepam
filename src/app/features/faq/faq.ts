import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vd-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  public expandedIndex: number | null = 0; // First item expanded by default

  public faqItems = [
    {
      question: `What is Vijnanadeepam?`,
      answer: `Vijnanadeepam is a group of visually impaired individuals and volunteers dedicated to enhancing the lives of visually challenged people in Kerala, India. The group focuses on converting printed books into audio format to improve access to reading materials.`,
    },
    {
      question: `What is the Vijnanadeepam Audio Library?`,
      answer: `The Vijnanadeepam Audio Library converts printed books into audio books for the visually impaired. Volunteers donate their voices to create audio clips, operating under the Indian Copyright Act 1957, Section 52 Sub-Section (1), Amendment 2012 Section (zb).`,
    },
    {
      question: `Who manages Vijnanadeepam?`,
      answer: `Vijnanadeepam is managed by a panel of twelve dedicated administrators who oversee all activities and initiatives.`,
    },
    {
      question: `What types of libraries does Vijnanadeepam maintain?`,
      answer: `Vijnanadeepam maintains several libraries on Telegram, including the Malayalam Library, English Library, Children's Library, and Teachers' Library, tailored to meet different user needs.`,
    },
    {
      question: `What projects and programs does Vijnanadeepam offer?`,
      answer: `Vijnanadeepam offers various projects such as career audio guidance, English learning, technology vision, news updates, and a friendship forum for artistic and literary activities.`,
    },
    {
      question: `How can I become a member of the Vijnanadeepam Audio Library?`,
      answer: `Individuals with 40% or more visual impairment can request membership by filling out an application form on the website and submitting a copy of their disability certificate issued by competent authorities.`,
    },
    {
      question: `Who is eligible for Vijnanadeepam Audio Library membership?`,
      answer: `Only individuals who cannot read without assistance and meet the visual impairment criteria are eligible. The library operates under the Indian Copyright Act 1957, Section 52 Sub-Section (1), Amendment 2012 Section (zb).`,
    },
    {
      question: `How can I volunteer for Vijnanadeepam?`,
      answer: `Anyone with a passion for reading and a desire to help can enroll as a volunteer by filling out the application form on the website. The duration of volunteership is flexible.`,
    },
    {
      question: `How is the 'Voice for Vision' (Mizhiyakan Mozhikal) Volunteers Campaign conducted?`,
      answer: `The campaign identifies volunteers through campaigns organized with the support of institutions such as academic and public libraries, National Service Scheme units, Readers' Clubs, and literary forums in schools and colleges across Kerala.`,
    },
    {
      question: `What is the Vijnanadeepam Textbook Project?`,
      answer: `This project aims to provide revised textbooks, teacher handbooks, and teaching notes to visually impaired students and teachers in Kerala every academic year.`,
    },
    {
      question: `What is the Vijnanadeepam-Punnyam Little Scholarship Scheme?`,
      answer: `This scheme provides scholarships to visually impaired school children in Kerala who excel academically and are economically disadvantaged, funded by the Punnyam Charitable Organization, and awarded based on written examinations and interviews.`,
    },
  ];

  toggleExpansion(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  isExpanded(index: number): boolean {
    return this.expandedIndex === index;
  }
}

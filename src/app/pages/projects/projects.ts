import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  activeFilter = 'all';

  projects = [
    {
      title: 'Gig Care',
      category: 'system',
      imageClass: 'project-image-one',
      icon: 'fa-solid fa-shield-halved',
      imageTitle: 'GIG CARE',
      status: 'Academic Project',
      description:
        'An AI-driven micro-takaful platform designed to provide affordable protection solutions for gig workers, including delivery riders and e-hailing drivers.',
      tags: ['Python', 'Machine Learning', 'Flask', 'PostgreSQL'],
      type: 'AI & System Development',
    },
    {
      title: 'Research Tracking System',
      category: 'system',
      imageClass: 'project-image-two',
      icon: 'fa-solid fa-chart-column',
      imageTitle: 'RESTRAQ',
      status: 'Assignment Project',
      description:
        'A Research Tracking and Quality Management System designed to manage research projects, grants, progress reports and research outputs.',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
      type: 'Database & System Development',
    },
    {
      title: 'Personal Portfolio Website',
      category: 'web',
      imageClass: 'project-image-three',
      icon: 'fa-solid fa-globe',
      imageTitle: 'PERSONAL PORTFOLIO',
      status: 'Personal Project',
      description:
        'A personal portfolio website created to introduce myself, showcase my skills, present academic projects and provide contact information.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      type: 'Web Development',
    },
  ];

  get filteredProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) => project.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {

  contentHeader = {
    headerTitle: 'Matières',
    actionButton: false,
    breadcrumb: {
      type: 'pipes',
      links: [
        {
          name: 'Détails de la matière',
          isLink: false
        }
      ]
    }
  };
  showChapterForm = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addChapter() {
    this.showChapterForm = true;
    this.router.navigate(['/home/subjects/details', this.route.snapshot.params.id, 'addChapter']);
  }

}

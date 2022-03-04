import { Component, Inject, OnInit } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';
import { DOCUMENT } from '@angular/common';
import { CoreLoadingScreenService } from '@core/services/loading-screen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public coreConfig: any;

  // Private

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(@Inject(DOCUMENT) private document: any, private _coreLoadingScreenService: CoreLoadingScreenService ) {

  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
  }

}

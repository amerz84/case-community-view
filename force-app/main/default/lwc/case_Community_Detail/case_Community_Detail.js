/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api } from 'lwc';


//Case object record page component for ASC (Community) view 
export default class CaseCommunityLWC extends LightningElement {
  @api recordId;
  @api sysInfoOpen;
  @api aircraftOpen;

  //Bind value of the classList of section elements
  //(i.e. add 'slds-is-open' when section toggle status is true)
  get sectionClassSysInfo() {
    return this.sysInfoOpen 
      ? 'slds-section slds-grid slds-wrap slds-gutters_xx-small slds-is-open' 
      : 'slds-section slds-grid slds-wrap slds-gutters_xx-small';
  }

  get sectionClassAircraft() {
    return this.aircraftOpen 
      ? 'slds-section slds-grid slds-wrap slds-gutters_xx-small slds-is-open' 
      : 'slds-section slds-grid slds-wrap slds-gutters_xx-small';
  }

  get btnExpanded() {
    return this.aircraftOpen;
  }

  // Set default status of expandable sections to "open"
  connectedCallback() {
    if (typeof this.sysInfoOpen === 'undefined') this.sysInfoOpen = true;
    if (typeof this.aircraftOpen === 'undefined') this.aircraftOpen = true;
  }

  /**
   * Toggle expandable section (open/closed)
   * @param {*} event - expandable section button click event
   */
  toggleSection(event) {
    if(event.target.name === 'aircraft') {
      this.aircraftOpen = !this.aircraftOpen;
    }
    else if(event.target.name === 'sys-info') {
      this.sysInfoOpen = !this.sysInfoOpen;
    }
  }
}
class perscription {
	perscriptionTitle() {
		return cy
			.get('.sl-static > :nth-child(1) > :nth-child(2)')
			.should('contain', 'What have you tried to improve your sleep?');
	}
	prescriptionPills() {
		return cy
			.get('[data-index="1"] > .sl-question > .sl-page-title-area > .sl-page-title')
			.should('contain', 'Do you use prescription sleeping pills (like Ambien or Trazodone)?');
	}
	prescriptionPillsAnswer() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select')
			.select("No, I'm not taking any right now");
	}
	nonPrescriptionPills() {
		return cy
			.get('[data-index="2"] > .sl-question > .sl-page-title-area > .sl-page-title')
			.should('contain', 'Do you use non-prescription sleep remedies (like melatonin or Zzzquil)?');
	}
	nonPrescriptionPillsAnswer() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
			.select("No, I'm not taking any right now");
	}
}
export default perscription;

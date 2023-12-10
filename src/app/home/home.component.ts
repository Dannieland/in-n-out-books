// Import Component object
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	title: string = "Loan Calculator";
	resultTitle: string = "Your Loan Results:";
	loanAmountPlaceHolder = "Loan Amount";
	visibleForm: boolean = true;
	visibleResults: boolean = false;
	visibleGreeting: boolean = true;
	visibleResultsH1: boolean = false;
	monthlyPayment: number = 0;
	totalInterest: number = 0;

	loanForm: FormGroup = new FormGroup({});

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		let decimalRegex = /^(?:\d*\.\d{1,2}|\d+)$/;
		this.loanForm = this.fb.group({
			loanAmount: [
				"",
				Validators.compose([
					Validators.required,
					Validators.pattern("^[0-9]*$"),
				]),
			],
			numberOfYears: [
				"",
				Validators.compose([
					Validators.required,
					Validators.pattern("^[0-9]*$"),
				]),
			],
			interest: [
				"",
				Validators.compose([
					Validators.required,
					Validators.pattern(decimalRegex),
				]),
			],
		});
	}

	get form() {
		return this.loanForm.controls;
	}

	onSubmit(event: any) {}

	// Method that calculates monthly payment and total interest onclick
	calculateLoan() {
		this.visibleForm = false;
		this.visibleResults = true;
		this.visibleGreeting = false;
		this.visibleResultsH1 = true;
		const formValues = this.loanForm.value;
		const loanAmount: number = formValues.loanAmount;
		const numberOfYears: number = formValues.numberOfYears;
		const interest: number = formValues.interest;
		const numberOfPayments: number = numberOfYears * 12;
		const monthlyInterest: number = interest / 1200;

		// Calculating monthly payment
		this.monthlyPayment =
			(loanAmount * monthlyInterest) /
			(1 - (1 + monthlyInterest) ** -numberOfPayments);

		// Calculating total interest
		this.totalInterest = this.monthlyPayment * numberOfPayments - loanAmount;
		console.log(this.monthlyPayment.toFixed(2));

		console.log(formValues);
	}

	//Back to cleared form
	backToForm() {
		this.visibleForm = true;
		this.visibleResults = false;
	}
}

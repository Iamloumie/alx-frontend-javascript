// task_5/js/main.ts

// Interface for MajorCredits with branded type
interface MajorCredits {
  credits: number;
  readonly _majorBrand: unique symbol; // brand property for unique identification
}

// Interface for MinorCredits with branded type
interface MinorCredits {
  credits: number;
  readonly _minorBrand: unique symbol; // brand property for unique identification
}

/**
 * Sum two major credit subjects
 * @param subject1 First major credit subject
 * @param subject2 Second major credit subject
 * @returns Total major credits
 */
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

/**
 * Sum two minor credit subjects
 * @param subject1 First minor credit subject
 * @param subject2 Second minor credit subject
 * @returns Total minor credits
 */
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}

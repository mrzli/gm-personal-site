import React from 'react';
import { Title } from '../reusable/Title';

interface PersonalInfoScreenProps {}

export function PersonalInfoScreen(
  props: PersonalInfoScreenProps
): React.ReactElement {
  return (
    <div>
      <Title>Personal Info</Title>
      <p>Name: Goran Mržljak</p>
      <p>Gender: Male</p>
      <p>Date of Birth: October 27, 1983</p>
      <p>Place of Birth: Karlovac, Croatia</p>
      <p>Nationality: Croatian</p>
      <p>Languages: Croatian (native) and English (fluent)</p>
      <p>I have a B-category driver's license.</p>
    </div>
  );
}

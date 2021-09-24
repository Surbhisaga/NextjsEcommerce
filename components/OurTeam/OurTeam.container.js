import React from 'react'
import { useSelector } from 'react-redux';
import OurTeam from './OurTeam';

export default function OurTeamCotainer() {
    const teamMembers = useSelector(state => state.teamMembers)
    return <OurTeam teamMembers={teamMembers}/>;
}

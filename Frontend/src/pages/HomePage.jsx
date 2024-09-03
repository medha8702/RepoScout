import React, { useState } from 'react'
import toast from "react-hot-toast";

import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Spinner from "../components/Spinner";

const HomePage = () => {
	const [userProfile, setUserProfile]= useState(null);
	const [ repos, setRepos]=useState([]);
	const [loading, setLoading]=useState(false);
	const[sortType, setSortType]=useState("forks");
	return (
		<div className='m-4'>
			<Search />
			<SortRepos />
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
				<ProfileInfo />
				<Repos />
				<Spinner />
			</div>
		</div>
	);
};

export default HomePage

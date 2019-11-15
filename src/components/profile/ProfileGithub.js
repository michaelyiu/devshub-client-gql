import React, { useState, useEffect } from 'react';

const ProfileGithub = (props) => {
	const [repos, setRepos] = useState([]);
	const { username } = props;

	const clientId = '112828554c0024b84f84';
	const clientSecret = '28343cad309023d8bed69ce3e3d7906959739307';
	const count = 5;
	const sort = 'created: asc';

	useEffect(() => {
		const fetchRepos = () => {
			fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}$client_id=${clientId}&client_secret=${clientSecret}`)
				.then(res => res.json())
				.then(data => {
					setRepos(data);
				})
				.catch(err => {
					console.log(err);
					return null;
				});
		}
		fetchRepos();
	}, [username]);

	let repoItems;
	if (repos && repos.length > 0) {
		repoItems = (
			repos.map(repo => (
				<div key={repo.id} className="card card-body mb-2">
					<div className="row">
						<div className="col-md-6">
							<h4>
								<a href={repo.html_url} className="text-info" target="_blank" rel="noopener noreferrer">
									{repo.name}
								</a>
							</h4>
							<p>{repo.description}</p>
						</div>
						<div className="col-md-6">
							<span className="badge badge-info mr-1">Stars: {repo.stargazers_count}</span>
							<span className="badge badge-secondary mr-1">Watchers: {repo.watchers_count}</span>
							<span className="badge badge-success mr-1">Forks: {repo.forks_count}</span>
						</div>
					</div>
				</div>
			))
		)
	} else {
		repoItems = null;
		return null;
	};

	return (
		<div>
			<hr />
			{repoItems && <h3 className="mb-4">Latest Github Repos</h3>}
			{repoItems}
		</div>
	)
}

export default ProfileGithub;
import { useCapsuleFilter } from '../../contexts/capsule-filter';
import { useGetCapsules } from '../../hooks/capsule';
import CapsuleCard from '../CapsuleCard';
import LoadingCard from '../LoadingCard';
import Pagination from './Pagination';

function CapsuleList() {
	const { page, filter } = useCapsuleFilter();

	const { data: capsules, isLoading, isError } = useGetCapsules(filter, page);

	const capsuleList = (
		<div className='grid grid-cols-1 gap-10 px-10 pb-20 xl:px-32 lg:grid-cols-3 md:grid-cols-2'>
			{capsules?.docs?.map((capsuleData) => (
				<CapsuleCard key={capsuleData.id} capsule={capsuleData} />
			))}
		</div>
	);

	const capsuleListLoading = (
		<div
			data-testid='loading-indicator'
			className='grid grid-cols-1 gap-10 px-10 pb-20 xl:px-32 lg:grid-cols-3 md:grid-cols-2'
		>
			{new Array(3).fill(0).map(() => (
				<LoadingCard key={Math.random()} />
			))}
		</div>
	);

	const { hasNextPage, hasPrevPage, totalDocs } = capsules || {};

	if (isError) {
		return (
			<h3 className='text-center my-10 text-xl text-red-500'>
				Unable to load Capsule list. Please try again later.
			</h3>
		);
	}

	return (
		<div className='mb-32'>
			{capsules?.docs?.length === 0 && !isError && !isLoading && (
				<h3 className='text-center mb-20 text-xl text-red-500'>No Capsules Found.</h3>
			)}
			{isLoading ? capsuleListLoading : capsuleList}
			{isLoading || !capsules?.docs?.length ? null : (
				<Pagination hasNextPage={hasNextPage} hasPrevPage={hasPrevPage} totalCapsules={totalDocs} />
			)}
		</div>
	);
}

export default CapsuleList;

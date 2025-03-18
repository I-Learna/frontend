import FreelancersTable from "@/components/routes/admin/Tables/FreelancersTable";
import InputSearch from "@/components/ui/InputSearch";
import { getFreelancerTableData } from "@/services/AdminTableServices";

const Page = async () => {
  const freelancers = await getFreelancerTableData();

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">All Freelancers</h2>

        <div className="w-1/2">
          <InputSearch />
        </div>
      </div>

      <section className="mt-4">
        <div className="flex gap-4 mb-3">
          <h6 className="flex gap-2 items-center">
            All <span className="bg-blue-100 text-blue-700 p-1 rounded-lg text-xs px-2">{freelancers.totals.all}</span>
          </h6>

          <h6 className="flex gap-2 items-center">
            Published
            <span className="bg-green-100 text-green-700 p-1 rounded-lg text-xs px-2">{freelancers.totals.active}</span>
          </h6>

          <h6 className="flex gap-2 items-center">
            Pending Review
            <span className="bg-yellow-100 text-yellow-700 p-1 rounded-lg text-xs px-2">
              {freelancers.totals.pending}
            </span>
          </h6>

          <h6 className="flex gap-2 items-center">
            Drafted{" "}
            <span className="bg-gray-100 text-gray-700 p-1 rounded-lg text-xs px-2">
              {freelancers.totals.suspended}
            </span>
          </h6>

          <h6 className="flex gap-2 items-center">
            Rejected{" "}
            <span className="bg-red-100 text-red-700 p-1 rounded-lg text-xs px-2">{freelancers.totals.rejected}</span>
          </h6>
        </div>
        <FreelancersTable freelancers={freelancers.records} />
      </section>
    </div>
  );
};

export default Page;

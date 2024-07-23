const stats = [
  {
    id: "stats-1",
    title: "Active Users",
    value: "38000+",
  },
  {
    id: "stats-2",
    title: "Accounts Created in The Last 7 Days",
    value: "930+",
  },
  {
    id: "stats-3",
    title: "Videos Created",
    value: "200K+",
  },
];

const Stats = () => (
  <section className="flex justify-center items-center flex-row flex-wrap pt-10 ">
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-dimWhite uppercase ml-2 mr-2 max-w-sm">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;

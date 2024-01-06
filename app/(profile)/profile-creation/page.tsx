import AccountProfile from "@/components/forms/AccountProfile";

export default async function Page() {
    return (
        <div className="mx-auto flex max-w-3xl justify-start flex-col px-10 py-20">
            <h1 className="head-text">Profile Creation</h1>
            <p className='mt-3 text-base-regular text-light-2'>
                Complete your profile now, to use Threds.
            </p>

            <section className='mt-9 bg-dark-2 p-10'>
                <AccountProfile />
            </section>
        </div>
    )
}

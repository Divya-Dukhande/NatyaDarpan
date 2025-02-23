function CommonForm({ formControls }) {
    return (
        <form>
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItem => (
                        <div className="grid w-full gap-1.5" key={controlItem.name}>
                            <label className="mb-1">{controlItem.label}</label>
                            {
                                renderInputsByComponentType(controlItem)
                            }
                        </div>
                    ))
                }
            </div>
        </form>
    );
}

export default CommonForm;

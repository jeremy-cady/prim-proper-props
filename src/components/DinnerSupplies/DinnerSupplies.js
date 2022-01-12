function DinnerSupplies({list}) {

    return(
        <>
            <h2>Dinner Supplies</h2>
            <div>
                Spoons: {list.length * 2}
            </div>
            <div>
                Forks: {list.length * 2}
            </div>
            <div>
                Knives: {list.length * 2}
            </div>
        </>
        
    )
}

export default DinnerSupplies;
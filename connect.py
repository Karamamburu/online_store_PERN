import asyncio

import asyncpg


async def connect_and_query():
    conn = await asyncpg.connect(
        user='postgres',
        password='postgres',
        database='postgres',
        host='localhost',
        port=5432,
    )

    result = await conn.fetch('SELECT true;')
    print(result)

    await conn.close()


if __name__ == '__main__':
    asyncio.run(connect_and_query())

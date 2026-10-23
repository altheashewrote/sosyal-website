import Papa from 'papaparse';
import { Artist } from '@/src/types/artist';

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4hJ5bMJRyl2jP44eWVYUPT7hwv02cL6zxn7Mcz9NHPdMHDbbGUxTkPHzSVjPeN-8R6CEnHsTqHqPj/pub?gid=0&single=true&output=csv"

export async function getSheetArtists(): Promise<Artist[]> {
    const res = await fetch(SHEET_URL, { next: { revalidate: 0 } });
    const csv = await res.text();

    const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });

    return (data as any[]).map((row, index) => ({
        id: `sheet-${index}`,
        name: row.name,
        year: parseInt(row.year, 10),
        genre: row.genre,
        link: row.link || null
    }));
}

export async function getArtists(): Promise<Artist[]> {
    const sheetArtists = await getSheetArtists();

    return [...sheetArtists].sort((a, b) => a.name.localeCompare(b.name));
}